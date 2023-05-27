import { siteConfig } from "~/config/site"

import { Icons } from "~/components/icons"

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex items-center gap-2 py-6">
        <Icons.logo className="hidden h-6 w-6 md:inline-block" />
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Sameer Jadav
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
