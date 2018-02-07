import {
    StackNavigator,
} from 'react-navigation';
import HomeScreen from "../components/HomeScreen";
import SignInForm from "../components/SignInForm";
import QuestionScreen from "../components/QuestionScreen/QuestionScreenOne";

const Navigations = StackNavigator({
    Home: { screen: SignInForm },
    Question: { screen: QuestionScreen },
});