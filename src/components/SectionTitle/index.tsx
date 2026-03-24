import './index.css';

export function SectionTitle({ children }: { children: React.ReactNode }) {
   return (
    <div className="section-title-container">
      <div className="divider-line" />
      <h2 className="section-title">{children}</h2>
      <div className="divider-line" />
    </div>
  );
}
