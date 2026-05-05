const CustomScrollbar = () => {
  return (
    <style>{`
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #d1fae5;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #34A12C, #2a8a23);
        border-radius: 5px;
        border: 2px solid #d1fae5;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #2a8a23, #1f6e1a);
      }
    `}</style>
  );
};

export default CustomScrollbar;
