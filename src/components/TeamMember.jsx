export default function TeamMember({ member }) {
  const { name, role, bio, github, linkedin, initials } = member
  const initialsText =
    initials || (name ? name.split(' ').map((n) => n[0]).slice(0, 2).join('') : '')

  return (
    <div className="card p-6">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-2xl font-display font-black">
          {initialsText}
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">{name}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{bio}</p>
      <div className="mt-4 flex items-center gap-3">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
            GitHub
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
            LinkedIn
          </a>
        )}
      </div>
    </div>
  )
}
