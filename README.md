# Green Harvest

A marketplace that connects customers with local farmers. Farmers list their produce, customers browse, order and pay, and the two sides can message each other. Farmers can also sell subscription plans, like a weekly vegetable box.

It has three parts: a Laravel API, a customer web app and a farmer dashboard.

## What it does

**For customers**
- Sign up with email confirmation, then log in.
- Browse and search produce and farmers, with categories, tags, images and reviews.
- Cart, checkout with billing addresses, and payment through Paystack.
- Order history, and reviews for products and for farmers.
- Subscribe to a farmer's plan.
- Chat with a farmer.
- Maps built with Leaflet: a map of farmers (with clustered markers), a single-farmer map and an order-tracking map.

**For farmers**
- Manage produce: create, edit, delete, with images.
- See incoming orders and update their status.
- Dashboard with orders, earnings and inventory.
- Build subscription plans from templates.
- Reply to customer messages.

## Stack

| Part | Tech |
|---|---|
| API | Laravel 11, PHP 8.4, MySQL, run with Laravel Sail (the Sail setup also includes Redis, Meilisearch and Mailpit; search is plain SQL, Meilisearch isn't wired in) |
| Customer app (`web/`) | React 18, TypeScript, Vite, TanStack Router and Query, MUI, Ant Design, react-hook-form, react-leaflet |
| Farmer app (`farmer-web/`) | React 18, TypeScript, Vite, React Router 7, TanStack Query, Ant Design, Docker |
| Payments | Paystack |
| Realtime | Laravel broadcasting through Pusher for chat (`MessageSent` event) |

## How it's organised

Separate middleware protects the two roles (`userAuth` and `farmerAuth`), so farmer routes like `/farmer/produce/*`, `/farmers/earnings` and `/farmer/subscriptions/*` can't be reached with a customer login.

```
app/Http/Controllers/   Billing, Cart, Chat, Farmer, Order, Payment, Produce, Subscription, User
app/Models/             one model per table
database/migrations/    31 migrations, from users to subscription templates
routes/api.php          the API surface
web/                    customer React app
farmer-web/             farmer dashboard
```

The schema was built up in steps from December 2024 to May 2025: users and farmers first, then produce, reviews, carts, orders, payments, and subscriptions last.

## Running it

**API**

```bash
cp .env.example .env
composer install
./vendor/bin/sail up -d
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan migrate
```

Set `PAYSTACK_PUBLIC_KEY` and `PAYSTACK_SECRET_KEY` in `.env` to test payments (use Paystack's test keys).

**Frontends**

```bash
cd web && npm install && npm run dev
cd farmer-web && npm install && npm run dev
```

## Notes

- Payments have only been tried with Paystack's test mode.
- The two frontends use different routers and component libraries because they were started at different times. Moving both to the same setup would be a good cleanup.
