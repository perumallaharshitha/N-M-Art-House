const EventCard = ({ title }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="text-xl text-primary font-medium">{title}</h3>
    </div>
  );
};

export default EventCard;