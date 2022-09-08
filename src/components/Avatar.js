export default function Avatar({ src }) {
  return (
    <div className="avatar inline-block">
      <div className="w-12 h-12 rounded-full ring ring-white ring-offset-base-100 ring-offset-1 mb-5 overflow-hidden">
        <img src={src} alt="user avatar" className="w-full h-full" />
      </div>
    </div>
  );
}
