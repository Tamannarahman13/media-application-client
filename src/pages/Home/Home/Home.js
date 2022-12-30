import React from 'react';

import Popular from '../../Popular/Popular';
import AddPost from './AddPost';

const Home = () => {
    return (
        <div>
           <AddPost/>
           <Popular/>
           
        </div>
    );
};

export default Home;