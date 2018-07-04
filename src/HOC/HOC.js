import React from 'react';

const elementsForArticle = description => Component => {
    return class extends React.Component {
        render() {
            if(description  === 'withTags') {
                return <Component text='Article with tags' />;
            }
            if(description  === 'withRemarks') {
                return <Component text='Article with remarks' />;
            }
            if(description === 'withShortArticle') {
                return <Component text='Short article' />;
            }
            if(description === 'Article'){
                return <Component text='' />
            }
        }
    };
};

export default elementsForArticle;
