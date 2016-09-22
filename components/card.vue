<template>
  <div class="repo-card" transition="bounce">
    <div class="header">
      <a class="avatar" href="{{repo.owner.html_url}}">
        <img :src="repo.owner.avatar_url">
      </a>
      <strong class="name">
        <a href="{{repo.html_url}}">{{repo.name}}</a>
        <sup class="language">{{repo.language}}</sup>
      </strong>
      <span>Created by <a href="{{repo.owner.html_url}}">{{repo.owner.login}}</a></span>
      <a class="button" href="{{repo.html_url}}">Unstar</a>
    </div>
    <div class="content">
      <p>{{{repo.description | urlize | fallback 'No description'}}}</p>
    </div>
    <div class="footer">
      <span class="status">
        <strong>{{repo.forks}}</strong>Forks
      </span>
      <span class="status">
        <strong>{{repo.watchers}}</strong>Stars
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['repo']
  }
</script>

<style>
  /*
   * created by lepture from https://github.com/lepture/github-cards
   */
  .repo-card {
    margin: 10px;
    width: 400px;
    border-radius: 5px;
    padding: 8px 8px 0;
    background: #fff;
    color: #555;
    position: relative;
    border: 1px solid #eee;
    border-color: #eee #ddd #bbb;
    box-shadow: rgba(0,0,0,.14) 0 1px 3px;
  }

  .repo-card:hover .button {
    visibility: visible;
  }

  .repo-card a {
    text-decoration: none;
    color: #4183c4;
    outline: 0;
  }

  .repo-card a:hover {
    text-decoration: underline;
  }

  .repo-card .header {
    position: relative;
  }

  .repo-card .button {
    visibility: hidden;
    position: absolute;
    top: 0;
    right: 0;
    padding: 4px 8px 4px 7px;
    color: #333;
    text-shadow: 0 1px 0 #fff;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    font-size: 13px;
    font-weight: bold;
    line-height: 14px;
    background-color: #eee;
    background-image: linear-gradient(#fcfcfc, #eee);
  }

  .repo-card .button:hover {
    text-decoration: none;
    border-color: #ccc;
    background-color: #ddd;
    background-image: linear-gradient(#eee, #ddd);
  }
  .repo-card .header {
    padding: 3px 0 4px 57px;
  }
  .repo-card .avatar,.repo-card .avatar img {
    position: absolute;
    top: 0;
    left: 0;
    width: 48px;
    height: 48px;
    background: #fff;
    border-radius: 4px;
  }

  .repo-card .header a {
    color: #707070;
  }

  .repo-card .header strong {
    display: block;
    font-size: 18px;
    line-height: 1.4;
  }

  .repo-card .header strong a {
    color: #292f33;
  }

  .repo-card .header sup {
    font-size: 10px;
    margin-left: 3px;
    color: #797979;
  }

  .repo-card .content {
    padding: 6px 0 10px;
  }

  .repo-card .content p {
    margin: 0 5px 0 0;
    font: 18px/24px Georgia,"Times New Roman",Palatino,serif;
    overflow: hidden;
    clear: both;
    word-wrap: break-word;
  }

  .repo-card .footer {
    border-top: 1px solid #eee;
    padding: 8px 0 6px;
  }

  .repo-card .status {
    font-size: 10px;
    padding-right: 10px;
    text-transform: uppercase;
  }

  .repo-card .status strong {
    font-size: 12px;
    padding-right: 5px;
  }

  @keyframes bounceInUp {
    from, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }

    75% {
      transform: translate3d(0, 10px, 0);
    }

    90% {
      transform: translate3d(0, -5px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  .bounce-enter {
    animation-name: bounceInUp 1s;
  }
</style>