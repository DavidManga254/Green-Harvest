const StarRating = ({ rating }: { rating: number }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(
                    <span
                        style={{ color: "#FF8A00", fontSize: "18px" }}
                        key={i}
                    >
                        &#9733;
                    </span>,
                );
            } else {
                stars.push(
                    <span
                        style={{ color: "#FF8A00", fontSize: "18px" }}
                        key={i}
                    >
                        &#9734;
                    </span>,
                );
            }
        }
        return stars;
    };

    return <div>{renderStars()}</div>;
};

export default StarRating;
