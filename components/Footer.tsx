'use client';

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-12 lg:px-24 py-24 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl md:text-4xl font-light mb-6">Let's create something extraordinary</h3>
            <p className="text-zinc-400 text-lg mb-8">
              Available for commissions and collaborations
            </p>
            <div className="space-y-2 text-zinc-400">
              <p>contact@architect.studio</p>
              <p>+234 XXX XXXX XXX</p>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end">
            <div className="text-right text-zinc-600 text-sm tracking-wider space-y-2">
              <p>© 2024 Architecture Portfolio</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
