import { AnimatedBackground } from '@/components/ui/animated-background'
import { GITHUB_USERNAME } from '@/util/data'
import { FadeIn } from '@/components/ui/fade-in'
import { parse, HTMLElement } from 'node-html-parser'

type Repo = {
    author: string
    name: string
    description: string
    language: string
    stars: number
}

function parseRepository(root: HTMLElement, el: HTMLElement): Repo {
    const repoPath = el.querySelector("a")?.getAttribute("href")?.split("/") || [];
    const [, author = "", name = ""] = repoPath;

    const parseMetric = (index: number): number => {
        try {
            return (
                Number(
                    el
                        .querySelectorAll("a.pinned-item-meta")
                    [index]?.text?.replace(/\n/g, "")
                        .trim()
                ) || 0
            );
        } catch {
            return 0;
        }
    };

    const languageSpan = el.querySelector("span[itemprop='programmingLanguage']");

    return {
        author,
        name,
        description:
            el.querySelector("p.pinned-item-desc")?.text?.replace(/\n/g, "").trim() || "",
        language: languageSpan?.text || "",
        // languageColor is optional in the new snippet, but our Repo type just needs the basics
        stars: parseMetric(0),
    };
}

async function getPinnedProjects(): Promise<Repo[]> {
    try {
        const res = await fetch(`https://github.com/${GITHUB_USERNAME}`, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!res.ok) {
            throw new Error('Failed to fetch github profile');
        }

        const html = await res.text();
        const root = parse(html);

        const pinned_repos = root
            .querySelectorAll(".js-pinned-item-list-item")
            .map((el) => parseRepository(root, el));

        return pinned_repos;
    } catch (error) {
        console.error('Error fetching github pinned repos via scraper:', error);
        return [];
    }
}

export async function ProjectsSection() {
    const projects = await getPinnedProjects();

    if (projects.length === 0) return null

    return (
        <FadeIn className="space-y-4">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-medium">Projects</h2>
                <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                >
                    See more &rarr;
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatedBackground
                    enableHover
                    className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
                    transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 0.2,
                    }}
                >
                    {projects.map((project) => (
                        <a
                            className="rounded-xl p-4 relative z-10 block"
                            href={`https://github.com/${project.author}/${project.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={`${project.author}-${project.name}`}
                            data-id={`${project.author}-${project.name}`}
                        >
                            <div className="relative z-50 flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-medium dark:text-zinc-100">
                                        {project.name}
                                    </h3>
                                    <div className="flex items-center space-x-2 text-xs text-zinc-500 dark:text-zinc-400">
                                        {project.language && (
                                            <span className="flex items-center">
                                                <span
                                                    className="mr-1 h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-500"
                                                />
                                                {project.language}
                                            </span>
                                        )}
                                        <span className="flex items-center">
                                            ★ {project.stars}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                    {project.description || 'No description provided.'}
                                </p>
                            </div>
                        </a>
                    ))}
                </AnimatedBackground>
            </div>
        </FadeIn>
    )
}
