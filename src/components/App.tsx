import '../styles/App.css';

// components
import Category from './Category';
// types
import { Category as CategoryType } from '../types/categories';
// mock
import { mock } from '../mock/links';

function App () {
  return (
    <div className="App">
      <div className="categories--container">
        {
          mock.map((category: CategoryType) => {
            return (
              <Category
                key={category.title}
                {...category}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
