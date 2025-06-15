export const renderStars = (rating) => {
    return (
        <div className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: i < rating ? '#FFD700' : '#ddd' }}>★</span>
            ))}
        </div>
    );
};