import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export function PostCard(post: Post) {
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <div className='flex flex-row mt-4'>
        <div>
          <img
            src={post.image}
            alt={post.title}
            className="w-24 h-24 object-cover rounded-lg"
          />
        </div>
        <div className="group relative ml-4">
          <h3 className="mt-3 text-lg font-semibold leading-6">
            <Link href={post.url}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6">
            {post.description}
          </p>
        </div>
      </div>
    </article>
  )
}

