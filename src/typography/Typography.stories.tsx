import { Meta } from '@storybook/blocks';
import { GridBox } from 'src/layout';

export default {
    title: 'Components/Typography',
    tags: ['autodocs'],
};

const Typo = {
    Heading: {
        'head-01-regular': 'head-01-regular',
        'head-01-bold': 'head-01-bold',
        'head-02-regular': 'head-02-regular',
        'head-02-bold': 'head-02-bold',
        'head-03-regular': 'head-03-regular',
        'head-03-bold': 'head-03-bold',
        'head-04-regular': 'head-04-regular',
        'head-04-bold': 'head-04-bold',
        'head-05-regular': 'head-05-regular',
        'head-05-bold': 'head-05-bold',
    },
    /*
    Body: {
        'body-01-regular': 'body-01-regular',
        'body-01-medium': 'body-01-medium',
        'body-01-bold': 'body-01-bold',
        'body-01-regular-compact': 'body-01-regular-compact',
        'body-01-medium-compact': 'body-01-medium-compact',
        'body-01-bold-compact': 'body-01-bold-compact',
        'body-02-regular': 'body-02-regular',
        'body-02-medium': 'body-02-medium',
        'body-02-bold': 'body-02-bold',
        'body-02-regular-compact': 'body-02-regular-compact',
        'body-02-medium-compact': 'body-02-medium-compact',
        'body-02-bold-compact': 'body-02-bold-compact',
        'body-03-regular': 'body-03-regular',
        'body-03-medium': 'body-03-medium',
        'body-03-bold': 'body-03-bold',
        'body-03-regular-compact': 'body-03-regular-compact',
        'body-03-medium-compact': 'body-03-medium-compact',
        'body-03-bold-compact': 'body-03-bold-compact',
        'body-04-regular': 'body-04-regular',
        'body-04-medium': 'body-04-medium',
        'body-04-bold': 'body-04-bold',
        'body-04-regular-compact': 'body-04-regular-compact',
        'body-04-medium-compact': 'body-04-medium-compact',
        'body-04-bold-compact': 'body-04-bold-compact',
        'body-05-regular': 'body-05-regular',
        'body-05-medium': 'body-05-medium',
        'body-05-bold': 'body-05-bold',
        'body-05-regular-compact': 'body-05-regular-compact',
        'body-05-medium-compact': 'body-05-medium-compact',
        'body-05-bold-compact': 'body-05-bold-compact',
    },*/
    //어디까지 storybook에서 보여줄지 결정
};

export const Docs = () => <></>;

Docs.parameters = {
    docs: {
        page: () => (
            <>
                <Meta title="Components/Typography" />
                {Object.entries(Typo).map(([styles, typo]) => (
                    <div key={styles}>
                        <div className="py-5 font-bold">{styles}</div>
                        <GridBox className="font-bold py-4" col={2}>
                            <div>classname</div>
                            <div>example</div>
                        </GridBox>
                        {Object.keys(typo).map((typo) => (
                            <GridBox col={2}>
                                <div className="text-slate-500">{typo}</div>
                                <div className={`py-2.5 ${typo}`} key={typo}>
                                    안녕하세요. 팀 얼루가입니다.
                                </div>
                            </GridBox>
                        ))}
                    </div>
                ))}
            </>
        ),
    },
};
