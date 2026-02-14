# Valentine's Day Interactive Web App 💝

An interactive Valentine's Day web experience built with React, TypeScript, and modern web technologies. This project features a playful, gamified way to ask someone to be your Valentine with support for multiple relationship types and languages.

## ✨ Features

- 🎮 **Interactive Game Flow**: Multi-stage interaction with animated GIFs
- 🌍 **i18n Support**: Full internationalization with English and Ukrainian
- 💕 **Inclusive Love Types**: Support for different relationship dynamics (W, M, WLW, MLM)
- 🎨 **Modern UI**: Built with Tailwind CSS 4 and shadcn/ui components
- 🌓 **Theme Support**: Light/dark mode toggle
- 📱 **Responsive Design**: Works seamlessly on all devices
- 🍫 **Playful Interactions**: Custom "chocolate agreement" modal and dynamic button behaviors

## 🚀 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 with @tailwindcss/vite
- **UI Components**: shadcn/ui + Radix UI
- **Internationalization**: i18next + react-i18next
- **Routing**: React Router DOM
- **Notifications**: Sonner (toast notifications)
- **Analytics**: Vercel Analytics

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🎨 Customization Guide

To make this project your own, here are the key areas you should modify:

### 1. Personal Links (`src/config.ts`)

Update the config file with your own profile and contact information:

```typescript
export const config = {
  profileLink: 'YOUR_LINKEDIN_OR_PORTFOLIO_URL',
  contactLink: 'YOUR_TELEGRAM_OR_CONTACT_URL',
  projectLink: 'YOUR_GITHUB_REPO_URL',
} as const;
```

**Location**: `src/config.ts`

This centralized config file makes it easy to customize all your personal links in one place.

### 2. GIF URLs (`src/components/GifDisplay.tsx`)

Replace the Giphy embed URLs with your own GIF selections for each relationship state and type:

```typescript
const gifs: GifConfig = {
    [RelationState.HELLO]: {
        [LoveType.W]: 'YOUR_GIPHY_EMBED_URL',
        // ... update all GIF URLs
    },
    // ... for all states: HELLO, AGREEMENT, TALK, LOVE, KISS
};
```

**Location**: Lines 20-51 in `src/components/GifDisplay.tsx`

### 3. Localization Texts

Customize the phrases and messages in:
- `src/i18n/locales/en.json` - English translations
- `src/i18n/locales/ua.json` - Ukrainian translations

Key sections to personalize:
- `phrases`: The "No" button text variations
- `toasts`: Toast notification messages
- `modal.text`: The chocolate agreement text (add your own humor!)

### 4. Relationship Types (`src/components/GifDisplay.tsx`)

Modify or add types in the `LoveType` enum (lines 11-16) and update the corresponding GIF configurations.

### 5. Theme and Styling

- Theme toggle: `src/components/ThemeToggle.tsx`
- Global styles: `src/index.css`
- Tailwind config: Uses Tailwind CSS 4 with automatic configuration

### 6. Add More Languages

To add a new language:

1. Create a new JSON file in `src/i18n/locales/[language-code].json`
2. Copy the structure from `en.json` or `ua.json`
3. Update `src/i18n/config.ts` to include the new language
4. Add the language option to `src/components/LanguageSwitcher.tsx`

## 📁 Project Structure

```
src/
├── assets/          # Icons and images
├── components/      # React components
│   ├── ui/         # shadcn/ui components
│   ├── GifDisplay.tsx
│   ├── LanguageSwitcher.tsx
│   └── ThemeToggle.tsx
├── hooks/          # Custom React hooks
├── i18n/           # Internationalization
│   ├── locales/    # Translation files
│   └── config.ts
├── lib/            # Utility functions
├── pages/          # Page components
│   └── ValentinesGame.tsx
└── main.tsx        # App entry point
```

## 🤝 Contributing

Feel free to fork this project and make it your own! If you add cool features or improvements, consider submitting a PR.

## 📝 License

This project is open source and available for anyone to use and customize.

## 💖 Credits

Created with love (and code) for Valentine's Day. Now in its 3rd year of updates!

---

**Pro tip**: Don't forget to update the deployment URL in your LinkedIn post and share it with someone special! 😊
