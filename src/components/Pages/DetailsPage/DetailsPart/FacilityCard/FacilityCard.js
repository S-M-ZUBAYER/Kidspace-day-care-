import React from 'react';

const FacilityCard = ({ facility }) => {
    const { name, photo, extraFees } = facility
    return (
        <div>
            <div
                class="relative bg-[url(https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)] bg-cover bg-center bg-no-repeat px-4 pb-4 pt-56 sm:px-6 sm:pb-6 sm:pt-64"
            >
                <span class="absolute inset-0 bg-gray-900/25"></span>

                <strong
                    class="absolute top-4 left-0 bg-red-600 py-1.5 px-3 text-xs uppercase tracking-wider text-white"
                >
                    Fees: {extraFees}
                </strong>

                <div class="relative text-center">


                    <p class="mt-1 text-white/95">1951-2022. Unchanged. Unmatched.</p>

                    <a
                        href="#"
                        class=" block bg-red-600 px-12 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700 focus:outline-none focus:ring"
                    >
                        Shop Teles Now
                    </a>
                </div>
            </div>

        </div>
    );
};

export default FacilityCard;