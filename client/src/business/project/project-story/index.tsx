import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

interface ProjectStoryProps {
  story: string;
  scroll: () => void;
}

export function ProjectStory({ story, scroll }: ProjectStoryProps) {
  const { t } = useTranslation();

  const [height, setHeight] = useState(0);
  const getHeight = (e) => {
    if (e !== null) {
      setHeight(e.clientHeight);
    }
  };

  return (
    <>
      <section className="project__story">
        <div className="project__story--layer" />
        <div className="project__story-contentBx" ref={getHeight}>
          {story.length > 0 ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
              {story}
            </ReactMarkdown>
          ) : (
            <p className="project__story--alert">{t("components.project.story.noStory")}</p>
          )}
        </div>
      </section>
      {story !== null && height > 800 ? (
        <a href="#" className="utils__btn" onClick={scroll}>
          <svg
            className="utils__hive"
            xmlns="http://www.w3.org/2000/svg"
            width="217.163"
            height="250.546"
            viewBox="0 0 217.163 250.546"
          >
            <path
              id="Tracé_178"
              data-name="Tracé 178"
              d="M212.986,62.2l.173,122.386-105.9,61.346L1.18,184.892,1,62.506,106.9,1.16Z"
            />
          </svg>
          <svg className="utils__btn--up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </a>
      ) : null}
    </>
  );
}
