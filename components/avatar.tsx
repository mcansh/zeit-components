import React from 'react';
import { SimpleImg } from 'react-simple-img';

const Avatar = ({
  boxSize,
  username,
}: {
  boxSize: number;
  username: string;
}) => (
  <span className="avatar">
    <SimpleImg
      src={`https://zeit.co/api/www/avatar/?u=${username}&s=${boxSize * 2}`}
      width={boxSize}
      height={boxSize}
      loading="lazy"
      importance="low"
      alt={username}
    />
    <style jsx>{`
      .avatar {
        flex-shrink: 0;
        border-radius: 100%;
        display: inline-block;
        overflow: hidden;
        border: 1px solid var(--accents-2);
        line-height: 0;
        vertical-align: top;
        -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
        background: var(--geist-background);
        width: ${boxSize}px;
        height: ${boxSize}px;
        transition: border 0.2s ease, background 0.2s ease;
      }

      img {
        width: 100%;
        height: 100%;
      }
    `}</style>
  </span>
);

const AvatarGroup = ({
  size,
  limit = 5,
  members,
}: {
  size: number;
  limit?: number;
  members: { username: string }[];
}) => (
  <main>
    {members.slice(0, limit).map((member, index) => (
      <span className="avatar" style={{ transform: `translateZ(${index}px)` }}>
        <Avatar boxSize={size} username={member.username} />
      </span>
    ))}
    {members.length > limit && (
      <span className="note">+{members.length - limit}</span>
    )}
    <style jsx>{`
      main {
        display: flex;
        align-items: center;
      }

      .avatar {
        position: relative;
        display: inline-flex;
        align-items: center;
      }

      .note {
        font-size: 14px;
        display: inline-flex;
        padding-left: 5px;
        justify-content: flex-end;
        margin-right: auto;
        color: var(--accents-7);
      }
      .avatar:nth-child(n + 2) {
        margin-left: -10px;
      }
    `}</style>
  </main>
);

export { Avatar, AvatarGroup };
