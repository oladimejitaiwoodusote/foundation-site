interface ValueCardProps {
    title: string;
    description: string;
  }
  
  function ValueCard({ title, description }: ValueCardProps) {
    return (
      <div className="value-card">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    );
  }
  
  export default ValueCard;
  