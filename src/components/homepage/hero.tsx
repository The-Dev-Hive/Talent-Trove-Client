import NeonGlow from '@/components/homepage/NeonGlow';
import MemberAvatars from '@/components/homepage/MembersWithAvatar';

export function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      <NeonGlow />

      <div className="relative pt-32 pb-20 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium bg-gray-800 text-gray-300">
            Waitlist v1 • Coming Soon
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            The software that sparks your imagination
          </h1>

          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>

          <MemberAvatars />
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center text-gray-500 text-sm">
        © Waitlist - A more meaningful home for software. Built by{' '}
        <a href="#" className="text-purple-400 hover:text-purple-300">
          @pacovitello
        </a>{' '}
        &{' '}
        <a href="#" className="text-purple-400 hover:text-purple-300">
          @davidepacillo
        </a>
        .
      </div>
    </div>
  );
}
