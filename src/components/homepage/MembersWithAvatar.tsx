export default function MemberAvatars() {
  return (
    <div className="mt-12">
      <div className="flex justify-center -space-x-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-900"
          />
        ))}
      </div>
      <p className="text-gray-400 mt-4">
        Join the <span className="font-bold text-white">2,000+</span> members
        who have already signed up.
      </p>
    </div>
  );
}
