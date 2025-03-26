import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Import your custom components
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CodeExample from '../components/CodeExample';
import ArchitectureShowcase from '../components/ArchitectureShowcase';
import CommandDemo from '../components/CommandDemo';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    // Smooth scrolling for anchor links
    useEffect(() => {
        const handleAnchorClick = (e: Event) => {
            const target = e.target as HTMLElement;
            const href = target.getAttribute('href');

            if (href && href.startsWith('#')) {
                e.preventDefault();

                const id = href.substring(1);
                const element = document.getElementById(id);

                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 80, // Adjusted for header
                        behavior: 'smooth'
                    });
                }
            }
        };

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);

    return (
        <Layout
            title={`${siteConfig.title}`}
            description={siteConfig.tagline}>
            {/* You can either use the Docusaurus Header or your custom Header */}
            {/* <Header /> */}
            <main>
                <Hero/>
                <Features/>
                <CodeExample/>
                <ArchitectureShowcase/>
                <CommandDemo/>
                <Roadmap/>
            </main>
            {/* You can either use Docusaurus Footer or your custom Footer */}
            <Footer/>
        </Layout>
    );
}