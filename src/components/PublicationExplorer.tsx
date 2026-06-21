import { useMemo, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  type ColumnDef,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table';
import type { Publication } from '../lib/content';

type Props = {
  publications: Publication[];
  topics: readonly string[];
};

function renderAuthors(authors: string) {
  const parts = authors.split(/(H\. Zhao)/g);

  return parts.map((part, index) =>
    part === 'H. Zhao' ? (
      <strong className="author-highlight" key={`${part}-${index}`}>
        {part}
      </strong>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
}

export default function PublicationExplorer({ publications, topics }: Props) {
  const [topic, setTopic] = useState('All');
  const [sorting, setSorting] = useState<SortingState>([{ id: 'date', desc: true }]);

  const filteredPublications = useMemo(() => {
    if (topic === 'All') return publications;
    return publications.filter((paper) => paper.topics.includes(topic));
  }, [publications, topic]);

  const columns = useMemo<ColumnDef<Publication>[]>(
    () => [
      {
        accessorKey: 'date',
        header: 'Year',
        cell: ({ row }) => <span className="paper-year">{row.original.year}</span>,
      },
      {
        accessorKey: 'title',
        header: 'Publication',
        cell: ({ row }) => {
          const paper = row.original;
          const officialLink = paper.links.find((link) => link.label === 'official');
          const actionLinks = paper.links.filter((link) => link.label !== 'official');

          return (
            <article className="paper">
              <div className="paper-heading">
                <span className="paper-venue">{paper.venue}</span>
                {paper.note ? <span className="paper-note">{paper.note}</span> : null}
              </div>
              <h3>
                {officialLink ? (
                  <a href={officialLink.url} target="_blank" rel="noreferrer">
                    {paper.title}
                  </a>
                ) : (
                  paper.title
                )}
              </h3>
              <p>{renderAuthors(paper.authors)}</p>
              {actionLinks.length > 0 ? (
                <div className="paper-actions" aria-label="Publication links">
                  {actionLinks.map((link) => (
                    <a
                      key={`${paper.title}-${link.label}-${link.url}`}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
              <div className="topic-list" aria-label="Publication topics">
                {paper.topics.map((paperTopic) => (
                  <span key={paperTopic}>{paperTopic}</span>
                ))}
              </div>
            </article>
          );
        },
      },
    ],
    [],
  );

  const table = useReactTable({
    data: filteredPublications,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const resetFilters = () => {
    setTopic('All');
    setSorting([{ id: 'date', desc: true }]);
  };

  const dateSort = sorting.find((item) => item.id === 'date');
  const sortValue = dateSort?.desc === false ? 'oldest' : 'newest';

  return (
    <section className="publication-explorer" aria-labelledby="publications">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Research output</p>
          <h2 id="publications">Selected publications</h2>
        </div>
        <p>{table.getRowModel().rows.length} papers shown</p>
      </div>

      <div className="controls" aria-label="Publication filters">
        <label>
          <span>Topic</span>
          <select value={topic} onChange={(event) => setTopic(event.target.value)}>
            <option value="All">All topics</option>
            {topics.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Sort</span>
          <select
            value={sortValue}
            onChange={(event) => {
              setSorting([{ id: 'date', desc: event.target.value === 'newest' }]);
            }}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </label>

        <button type="button" onClick={resetFilters}>
          Reset
        </button>
      </div>

      <div className="publication-table">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
