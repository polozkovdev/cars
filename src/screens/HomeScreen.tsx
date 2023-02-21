import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { verticalScale } from "src/helpers/scaleHelper";
import NewTripScreen from "src/screens/NewTripScreen";
import SettingsScreen from "src/screens/SettingsScreen";
import HistoryScreen from "src/screens/HistoryScreen";
import HelpScreen from "src/screens/HelpScreen";

const Stack = createNativeStackNavigator<any>();
const Tab = createBottomTabNavigator();

interface IHeaderProps {
  label: string;
}

function Header({ label }: IHeaderProps) {
  return (
    <View
      style={{
        height: verticalScale(60),
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto_500Medium",
          fontSize: verticalScale(18),
          color: "#fff",
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === "NewTrip") {
            return (
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Roboto_500Medium",
                    fontSize: verticalScale(14),
                    lineHeight: verticalScale(14),
                    marginTop: verticalScale(4),
                    color,
                  }}
                >
                  New Trip
                </Text>
              </View>
            );
          } else if (route.name === "Settings") {
            return (
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Roboto_500Medium",
                    fontSize: verticalScale(14),
                    lineHeight: verticalScale(14),
                    marginTop: verticalScale(4),
                    color,
                  }}
                >
                  Settings
                </Text>
              </View>
            );
          } else if (route.name === "Help") {
            return (
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Roboto_500Medium",
                    fontSize: verticalScale(14),
                    lineHeight: verticalScale(14),
                    marginTop: verticalScale(4),
                    color,
                  }}
                >
                  Help
                </Text>
              </View>
            );
          }

          return (
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto_500Medium",
                  fontSize: verticalScale(14),
                  lineHeight: verticalScale(14),
                  marginTop: verticalScale(4),
                  color,
                }}
              >
                History
              </Text>
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarItemStyle: { height: verticalScale(80) },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#00C3AA",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          padding: 0,
          margin: 0,
          marginBottom: 0,
          height: verticalScale(80),
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "transparent",
          borderTopWidth: 0,
          backgroundColor: "#fff",
        },
        tabBarLabelPosition: "below-icon",
      })}
    >
      <Tab.Screen
        name="NewTrip"
        component={NewTripScreen}
        options={{
          header: (props) => <Header {...props} label={"NewTrip"} />,
          tabBarLabel: "New Trip",
          tabBarStyle: {
            display: "none",
            marginBottom: verticalScale(60),
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          header: (props) => {
            return <Header {...props} label={"Settings"} />;
          },
          tabBarLabel: "Settings",
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          header: (props) => {
            return <Header {...props} label={"History"} />;
          },
          tabBarLabel: "History",
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          header: (props) => {
            return <Header {...props} label={"Help"} />;
          },
          tabBarLabel: "Help",
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function HomeScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="main"
      >
        <Stack.Screen name="main" component={TabNavigator} />
        <Stack.Screen name="NewTrip" component={NewTripScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
