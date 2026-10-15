import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const bouquets = [
    {
        name: 'Sunday in Bloom',
        description: 'Garden roses, ranunculus, and a little wildness.',
        price: 68,
        category: 'Just because',
        image: 'photo-1520763185298-1b434c919102',
        alt: 'A soft pink and cream hand-tied flower bouquet',
        note: 'BESTSELLER',
    },
    {
        name: 'Peachy Keen',
        description: 'Apricot roses with fresh seasonal stems.',
        price: 54,
        category: 'Birthday',
        image: 'photo-1490750967868-88aa4486c946',
        alt: 'A bright bouquet of fresh seasonal flowers',
        note: 'SEASONAL',
    },
    {
        name: 'The Love Note',
        description: 'Velvety reds and blush blooms, tied by hand.',
        price: 76,
        category: 'Romance',
        image: 'photo-1518895949257-7621c3c786d7',
        alt: 'Romantic red and pink flowers gathered together',
        note: '',
    },
    {
        name: 'Market Morning',
        description: 'A cheerful mix, gathered fresh each morning.',
        price: 48,
        category: 'Just because',
        image: 'photo-1487070183336-b863922373d4',
        alt: 'Colorful flowers arranged in a simple glass vase',
        note: 'FRESH PICK',
    },
];

const categories = ['All bouquets', 'Birthday', 'Romance', 'Just because'];

export default function Dashboard() {
    const [activeCategory, setActiveCategory] = useState('All bouquets');
    const [bag, setBag] = useState([]);
    const [bagOpen, setBagOpen] = useState(false);

    const visibleBouquets = activeCategory === 'All bouquets'
        ? bouquets
        : bouquets.filter((bouquet) => bouquet.category === activeCategory);

    const addToBag = (bouquet) => {
        setBag((items) => [...items, bouquet]);
        setBagOpen(true);
    };

    const bagTotal = bag.reduce((total, bouquet) => total + bouquet.price, 0);

    return (
        <AuthenticatedLayout>
            <Head title="Petal & Stem | Hand-tied bouquets" />

            <div className="bg-[#fbf8f2] text-[#252b21]">
                <section className="relative isolate flex min-h-[490px] items-end overflow-hidden bg-[#574b3a] sm:min-h-[560px]">
                    <img
                        src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2200&q=90"
                        alt="A lush gathering of fresh garden flowers"
                        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 -z-10 bg-black/35" />

                    <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-24 sm:px-8 sm:pb-16 lg:px-12">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f1d8a9]">
                            Flowers for the feeling
                        </p>
                        <h1 className="max-w-2xl font-serif text-5xl leading-[1.04] text-white sm:text-6xl lg:text-7xl">
                            A little more <em className="font-normal">beautiful</em> in every day.
                        </h1>
                        <p className="mt-5 max-w-lg text-base leading-7 text-white/90 sm:text-lg">
                            Thoughtful, hand-tied bouquets made with the loveliest stems of the season.
                        </p>
                        <a
                            href="#bouquets"
                            className="mt-8 inline-flex items-center gap-3 border border-white/80 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#252b21]"
                        >
                            Find your flowers <span aria-hidden="true">↓</span>
                        </a>
                    </div>
                    <p className="absolute bottom-5 right-6 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-white/80 md:block">
                        Grown with care · gathered by hand
                    </p>
                </section>

                <section id="bouquets" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
                    <div className="flex flex-col gap-7 border-b border-[#ddd8cc] pb-7 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a674b]">The flower bar</p>
                            <h2 className="mt-2 font-serif text-4xl text-[#252b21] sm:text-5xl">Made for your moment</h2>
                            <p className="mt-3 max-w-xl text-sm leading-6 text-[#65675c] sm:text-base">
                                Small-batch bouquets, wrapped in paper and ready to make someone’s day.
                            </p>
                        </div>

                        <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Filter bouquets">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    aria-pressed={activeCategory === category}
                                    className={`shrink-0 border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                                        activeCategory === category
                                            ? 'border-[#485642] bg-[#485642] text-white'
                                            : 'border-[#c9c8bb] text-[#485642] hover:border-[#485642]'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                        {visibleBouquets.map((bouquet) => (
                            <article key={bouquet.name} className="group min-w-0">
                                <div className="relative aspect-[4/5] overflow-hidden bg-[#e6e1d5]">
                                    <img
                                        src={`https://images.unsplash.com/${bouquet.image}?auto=format&fit=crop&w=900&q=85`}
                                        alt={bouquet.alt}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                    />
                                    {bouquet.note && (
                                        <span className="absolute left-3 top-3 bg-[#fbf8f2] px-2.5 py-1.5 text-[9px] font-bold tracking-[0.15em] text-[#485642]">
                                            {bouquet.note}
                                        </span>
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => addToBag(bouquet)}
                                        className="absolute bottom-3 left-3 right-3 bg-[#fbf8f2] px-4 py-3 text-sm font-semibold text-[#252b21] opacity-100 transition hover:bg-[#485642] hover:text-white sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                                    >
                                        Add to bag · ${bouquet.price}
                                    </button>
                                </div>
                                <div className="flex items-start justify-between gap-3 pt-4">
                                    <div>
                                        <h3 className="font-serif text-xl text-[#252b21]">{bouquet.name}</h3>
                                        <p className="mt-1 text-sm leading-5 text-[#6e7066]">{bouquet.description}</p>
                                    </div>
                                    <span className="shrink-0 pt-1 text-sm font-semibold">${bouquet.price}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="story" className="grid bg-[#e9e6d9] md:grid-cols-2">
                    <div className="flex min-h-[330px] flex-col justify-center px-6 py-14 sm:px-12 lg:px-20">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a674b]">A note from the studio</p>
                        <h2 className="mt-3 max-w-lg font-serif text-4xl leading-tight text-[#252b21] sm:text-5xl">
                            The best flowers feel like they found you.
                        </h2>
                        <p className="mt-5 max-w-md text-sm leading-7 text-[#65675c] sm:text-base">
                            We work with the seasons, choose every stem with care, and let each bouquet be a little one of a kind.
                        </p>
                    </div>
                    <div className="relative min-h-[280px] overflow-hidden md:min-h-[430px]">
                        <img
                            src="https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=1400&q=85"
                            alt="Florist arranging a fresh bouquet at the studio"
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                </section>

                <footer className="flex flex-col gap-3 px-5 py-7 text-xs text-[#65675c] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
                    <p className="font-serif text-lg text-[#485642]">Petal & Stem</p>
                    <p>Fresh flowers, gathered with care.</p>
                    <a href="#bouquets" className="font-semibold text-[#485642] hover:underline">Back to bouquets ↑</a>
                </footer>
            </div>

            {bagOpen && (
                <aside className="fixed bottom-4 right-4 z-50 w-[min(360px,calc(100vw-2rem))] border border-[#d8d2c5] bg-[#fbf8f2] p-5 shadow-xl" aria-live="polite">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a674b]">Your flower bag</p>
                            <p className="mt-1 font-serif text-xl text-[#252b21]">{bag.length} {bag.length === 1 ? 'bouquet' : 'bouquets'}</p>
                        </div>
                        <button type="button" onClick={() => setBagOpen(false)} className="px-2 py-1 text-sm text-[#65675c] hover:text-[#252b21]" aria-label="Close bag">Close</button>
                    </div>
                    <ul className="mt-4 max-h-36 space-y-2 overflow-auto border-y border-[#ddd8cc] py-3">
                        {bag.map((bouquet, index) => (
                            <li key={`${bouquet.name}-${index}`} className="flex justify-between gap-3 text-sm">
                                <span>{bouquet.name}</span><span className="font-medium">${bouquet.price}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-3 flex justify-between text-sm font-semibold">
                        <span>Subtotal</span><span>${bagTotal}</span>
                    </div>
                    <p className="mt-3 text-xs leading-5 text-[#65675c]">Checkout is coming soon. Call the studio to place your order.</p>
                </aside>
            )}
        </AuthenticatedLayout>
    );
}