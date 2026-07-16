import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import AppLayout from "../../../layouts/AppLayout";
import Image from "next/image";
import Link from "next/link";

const BlogPostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    fetch("https://api.myinvest.africa/rekit/api/v2/blogs/search")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.data && data.data.content) {
          // Find the post matching the ID
          const matchedPost = data.data.content.find((p) => String(p.id) === String(id));
          if (matchedPost) {
            setPost(matchedPost);
          } else {
            setError("Blog post not found.");
          }
        } else {
          setError("Failed to fetch blog post.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog post:", err);
        setError("An error occurred while fetching the post.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <AppLayout>
        <div className="flex justify-center items-center h-[50vh]">
          <p className="text-xl">Loading post...</p>
        </div>
      </AppLayout>
    );
  }

  if (error || !post) {
    return (
      <AppLayout>
        <div className="flex flex-col justify-center items-center h-[50vh]">
          <h1 className="text-2xl text-red-500 font-bold">{error || "Post not found"}</h1>
          <Link href="/blog" className="mt-4 text-[#F08420] underline">
            Return to Blog
          </Link>
        </div>
      </AppLayout>
    );
  }

  const avatar = post.coverImage || (post.images && post.images.length > 0 ? post.images[0] : "/assets/images/rekitdesktoplogo.png");

  return (
    <div>
      <Head>
        <title>{post.title} | Rekit Blog</title>
        <meta name="description" content={post.excerpt || post.title} />
      </Head>
      <AppLayout>
        <div className="flex-col justify-center content-center mx-50 lg:flex-col bg-white md:flex-col pb-10">
          <div className="lg:w-4/5 px-[1rem] pt-5 lg:pt-10 mx-auto pb-5">
            <h1 className="font-extrabold pt-0.5 text-[#F08420] text-2xl lg:text-4xl font-raleway pb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 pb-6">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            
            {avatar && (
              <div className="w-full relative h-[300px] lg:h-[500px] mb-8">
                <Image
                  src={avatar}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
            )}

            <div 
              className="prose lg:prose-xl max-w-none font-inter text-[#212020] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 flex justify-center">
              <Link href="/blog" className="text-white bg-[#F08420] hover:bg-[#d87114] px-6 py-3 rounded-full font-bold transition duration-300">
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default BlogPostDetail;
