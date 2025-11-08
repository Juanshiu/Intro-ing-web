export default function LoadingDots() {
  return (
    <div className="loader">
      <span></span>
      <span></span>
      <span></span>

      <style>{`
        .loader {
          display: flex;
          gap: 8px;
          justify-content: center;
          align-items: flex-end;
        }

        .loader span {
          width: 12px;
          height: 12px;
          background: #ccc;
          border-radius: 50%;
          display: inline-block;
          animation: bounce 0.6s infinite;
        }

        .loader span:nth-child(1) {
          animation-delay: 0s;
        }
        
        .loader span:nth-child(2) {
          animation-delay: 0.15s;
        }
        
        .loader span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes bounce {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
