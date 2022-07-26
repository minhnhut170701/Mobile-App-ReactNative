import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigation from './Navigation/navigation';
import { registerRootComponent } from 'expo';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './store/reducer';

const store = createStore(reducer)

const App = ()  => {
   
  return (
    <Provider store={store}>
        <Navigation />

    </Provider>
    
  );
}

const styles = StyleSheet.create({
  
});
registerRootComponent(App);
export default App;
