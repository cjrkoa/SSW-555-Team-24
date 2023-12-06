import ".//styles/components.css";

const BackgroundEllipses = () => {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-full">
          {/* Ellipse 1 */}
          <div className="absolute left-1/4 top-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-sky-900 rounded-full filter blur-xl opacity-20 w-96 h-96"></div>
          </div>
          {/* Ellipse 2 */}
          <div className="absolute right-1/4 bottom-1/4 transform translate-x-1/2 translate-y-1/2">
            <div className="bg-teal-400 rounded-full filter blur-xl opacity-20 w-96 h-96"></div>
          </div>
          {/* Add as many ellipses as you want */}
        </div>
      </div>
    );
  };

export default BackgroundEllipses;