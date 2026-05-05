const ReviewCard = ({ name, text }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <p className="text-gray-700 mb-4">"{text}"</p>
      <h4 className="text-primary font-medium">{name}</h4>
    </div>
  );
};

export default ReviewCard;