"""Run from the portfolio repo root:  python apply_changes.py
Applies the latest content, layout, and photo changes to the current files.
Stops with a message if any expected text is not found."""
import re, sys, os

def read(p):  return open(p, encoding="utf-8").read()
def write(p, s): open(p, "w", encoding="utf-8").write(s)

def sub_once(path, pattern, repl, regex=False, flags=re.S):
    s = read(path)
    if regex:
        t, n = re.subn(pattern, lambda m: repl, s, count=1, flags=flags)
    else:
        n = s.count(pattern)
        t = s.replace(pattern, repl, 1) if n == 1 else s
    if n != 1:
        sys.exit(f"STOP: expected 1 match in {path}, found {n}: {pattern[:70]!r}")
    write(path, t)
    print("updated", path)

# 1. globals.css: remove dark-mode rule, white background everywhere
sub_once("app/globals.css",
         r"@media \(prefers-color-scheme: dark\) \{.*?\n\}\n", "",
         regex=True)
sub_once("app/globals.css", "body {\n  background: var(--background);",
         "html,\nbody {\n  min-height: 100%;\n  background: #ffffff;\n}\n\nbody {")

# 2. layout.tsx: replace the empty dark footer with a light one
sub_once("app/layout.tsx",
         '<footer className="bg-gray-900 text-white mt-12 py-8">\n          {/* footer content */}\n        </footer>',
         '<footer className="bg-white text-gray-500 border-t border-gray-200 py-6 text-center text-sm">\n          © {new Date().getFullYear()} Akram Guroo. All rights reserved.\n        </footer>')

# 3. Navbar: profile photo first, then name
sub_once("components/Navbar.tsx",
         '<Link href="/" className="text-xl font-bold text-blue-600">\n          Akram Guroo\n        </Link>',
         '<Link href="/" className="flex items-center gap-3">\n          <img src="/profile.png" alt="Akram Guroo"\n            className="w-10 h-10 rounded-full object-cover object-[50%_25%] border-2 border-blue-600" />\n          <span className="text-xl font-bold text-blue-600">Akram Guroo</span>\n        </Link>')

# 4. config.ts: tech stack
sub_once("lib/config.ts",
         r"export const techStack = \[.*?\n\];",
         '''export const techStack = [
  { category: "Languages", skills: ["JavaScript", "TypeScript", "C", "C++", "Java", "Python"] },
  { category: "Frontend & Mobile", skills: ["React", "React Native", "Expo", "Next.js", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3"] },
  { category: "Backend", skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Socket.io (WebSockets)", "JWT Authentication", "Firebase"] },
  { category: "Database", skills: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Firestore"] },
  { category: "Tools & DevOps", skills: ["Git", "GitHub", "Docker", "Vercel", "Render", "Cloudinary", "Jest", "Postman", "Thunder Client", "Swagger", "Claude"] },
  { category: "Expertise", skills: ["Full Stack Development", "Mobile Development", "Real-Time Systems", "Team Leadership"] },
];''', regex=True)

# 5. about page
sub_once("app/about/page.tsx", 'period: "December 2024 - January 2025",',
         'period: "December 2024 - April 2025",')
sub_once("app/about/page.tsx", r"  const achievements = \[.*?\n  \];",
'''  const achievements = [
    { title: "HirePath v1 & v2 Live", icon: Target,
      description: "Led a 3-person team to ship a production MERN job portal, then independently added a real-time Socket.io messaging system." },
    { title: "Company Website Delivered", icon: Briefcase,
      description: "Rebuilt a company website from WordPress into a React/Vite app with a Spring Boot backend. The repo was handed over and deployed by the company's DevOps team." },
    { title: "Interns Mentored", icon: Award,
      description: "Trained a 6-member intern cohort at ANS Oceanverse on Git workflows, feature branching, and PR reviews." },
    { title: "Backend Security", icon: Award,
      description: "Implemented JWT authentication, role-based access control, rate limiting, and input validation across production APIs." },
  ];''', regex=True)
sub_once("app/about/page.tsx",
         r'<span className="font-semibold">Team Leader:</span> Led a 3-person team[^<]*</li>',
         '<span className="font-semibold">Team Leader:</span> Led a 3-person team, mentored a 6-member intern cohort on Git workflows, and took full ownership of a company website rebuild</li>',
         regex=True)
sub_once("app/about/page.tsx",
         r'<span className="font-bold">🎯 Problem Solver:</span> \{" "\}.*?</p>',
         '<span className="font-bold">🎯 Problem Solver:</span> {" "}\n              I\'m building DSA fundamentals in JavaScript and learning system design step by step, alongside my mobile product work.\n            </p>',
         regex=True)
sub_once("app/about/page.tsx",
         r'<span className="font-bold">👥 Team Leader:</span>.*?</p>',
         '<span className="font-bold">👥 Team Leader:</span> I lead by example. I took full ownership of a company website rebuild, presented it to the CEO, and mentored a 6-member intern cohort on Git workflows and collaboration.\n            </p>',
         regex=True)
sub_once("app/about/page.tsx", r"Right now, I'm a <span.*?</p>",
         "Right now, I'm focused on mastering <span className=\"font-semibold\">mobile development</span> with React Native, Expo, TypeScript, and Firebase through my work at ANS Oceanverse on OneBuddy. I'm also learning <span className=\"font-semibold\">system design from scratch</span>, practicing <span className=\"font-semibold\">DSA in JavaScript</span>, and building my <span className=\"font-semibold\">Python</span> skills.\n            </p>",
         regex=True)
sub_once("app/about/page.tsx",
         '<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">\n            About Me\n          </h1>',
         '<div className="flex items-center gap-6 mb-6">\n            <img src="/profile.png" alt="Akram Guroo"\n              className="w-28 h-28 rounded-full object-cover object-[50%_25%] border-4 border-white shadow-lg flex-shrink-0" />\n            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Me</h1>\n          </div>')

# 6. home page
sub_once("app/page.tsx", "Mobile & Web · MERN · React Native · Java Spring Boot",
         "Mobile & Web · MERN · React Native · Expo · Firebase")
sub_once("app/page.tsx", '<h1 className="text-5xl md:text-6xl font-bold text-gray-900">',
         '<img src="/profile.png" alt="Akram Guroo"\n              className="w-40 h-40 mx-auto rounded-full object-cover object-[50%_25%] border-4 border-white shadow-lg" />\n            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">')

if not os.path.exists("public/profile.png"):
    print("NOTE: copy your photo to public/profile.png (not found yet)")
print("ALL CHANGES APPLIED")