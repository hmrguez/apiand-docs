import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Rapid API Development',
        Svg: require('@site/static/img/speedometer.jpeg').default,
        description: (
            <>
                Apiand was designed to accelerate API development in .NET, allowing you to
                quickly scaffold and deploy robust API solutions with minimal effort.
            </>
        ),
    },
    {
        title: 'Powerful Templating',
        Svg: require('@site/static/img/blueprint.jpeg').default,
        description: (
            <>
                Focus on business logic while Apiand handles the boilerplate. Create and customize
                templates to maintain consistency across your .NET API projects.
            </>
        ),
    },
    {
        title: '.NET First Approach',
        Svg: require('@site/static/img/roads.jpeg').default,
        description: (
            <>
                Built specifically for .NET developers, Apiand integrates seamlessly with the
                .NET ecosystem, supporting modern API patterns and best practices.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}