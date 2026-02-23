"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { OutlineButton } from "@/components/motion";

interface Comment {
  id: string;
  text: string;
  timestamp: string;
}

export function RatingComments() {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [submittedRating, setSubmittedRating] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleStarClick = (star: number) => {
    setSubmittedRating(star);
  };

  const handleCommentSubmit = () => {
    if (!comment.trim()) return;
    const newComment: Comment = {
      id: Date.now().toString(),
      text: comment.trim(),
      timestamp: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    setComments((prev) => [newComment, ...prev]);
    setComment("");
  };

  const activeStar = hoveredStar || submittedRating;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>

      {/* Rating */}
      <section id="rating" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: 64,
          lineHeight: 0.9,
          letterSpacing: "0.02em",
          color: "#f5f5f0",
          textTransform: "uppercase",
          margin: 0,
        }}>
          rate this project
        </h2>

        <div style={{ display: "flex", gap: 8 }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.88 }}
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                display: "flex",
                alignItems: "center",
              }}
            >
              <motion.svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill={star <= activeStar ? "#ffffff" : "none"}
                stroke={star <= activeStar ? "#ffffff" : "rgba(255,255,255,0.35)"}
                strokeWidth="1.5"
                animate={{
                  fill: star <= activeStar ? "#ffffff" : "rgba(255,255,255,0)",
                  stroke: star <= activeStar ? "#ffffff" : "rgba(255,255,255,0.35)",
                }}
                transition={{ duration: 0.15 }}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </motion.svg>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {submittedRating > 0 && (
            <motion.p
              key="rating-confirm"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              you rated this {submittedRating} / 5
            </motion.p>
          )}
        </AnimatePresence>
      </section>

      {/* Comments */}
      <section id="discussion" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: 64,
          lineHeight: 0.9,
          letterSpacing: "0.02em",
          color: "#f5f5f0",
          textTransform: "uppercase",
          margin: 0,
        }}>
          discussion
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="share your thoughts..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleCommentSubmit();
            }}
            style={{
              width: "100%",
              height: 140,
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 8,
              padding: 16,
              color: "rgba(255,255,255,0.85)",
              fontSize: 14,
              fontFamily: "var(--font-sans)",
              resize: "none",
              outline: "none",
              lineHeight: 1.7,
            }}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <OutlineButton variant="primary" onClick={handleCommentSubmit}>
              post comment
            </OutlineButton>
          </div>
        </div>

        {/* Comments list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <AnimatePresence>
            {comments.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: 24,
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <span style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  {c.timestamp}
                </span>
                <p style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {c.text}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>

          {comments.length === 0 && (
            <p style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.05em",
              margin: 0,
            }}>
              discussion coming soon — be the first to comment
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
