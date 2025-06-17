export const renderStars = (rating) => {
    return (
        <div className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: i < rating ? 'var(--pis-blue)' : '#ddd', fontSize: '0.9rem' }}><i className="fas fa-star"></i></span>
            ))}
        </div>
    );
};