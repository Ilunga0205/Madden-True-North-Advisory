export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
  
  /* The Seasons font */
  @font-face {
    font-family: 'The Seasons';
    src: url('https://assets.codepen.io/6060109/TheSeasons-Bd.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  .font-display {
    font-family: 'The Seasons', serif;
    letter-spacing: -0.02em;
    font-weight: 700;
  }

  .font-body {
    font-family: 'Montserrat', sans-serif;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fadeInUp {
    opacity: 0;
    animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .animate-fadeIn {
    opacity: 0;
    animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .animate-slideDown {
    opacity: 0;
    animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .animate-scaleIn {
    opacity: 0;
    animation: scaleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .scroll-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .scroll-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }

  /* Brand Colors */
  .bg-brand {
    background-color: #8FA89A;
  }

  .text-brand {
    color: #8FA89A;
  }

  .border-brand {
    border-color: #8FA89A;
  }

  .bg-brand-light {
    background-color: #E8EDE9;
  }

  .bg-warm-white {
    background-color: #F6F4F1;
  }

  .bg-charcoal {
    background-color: #1F1F1F;
  }

  .text-charcoal {
    color: #1F1F1F;
  }

  .bg-taupe {
    background-color: #C6B8A5;
  }

  .text-taupe {
    color: #C6B8A5;
  }

  /* Parallax effect for hero image */
  .parallax-image {
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;