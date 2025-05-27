interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}