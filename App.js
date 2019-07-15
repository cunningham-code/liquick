import React from 'react';
import { ScrollView, TextInput, StyleSheet, Button, View, Text, Image, TouchableHighlight, FlatList } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.28

const HomeScreen = ({ navigation }) => (
  <View style={ styles.container }>
    <View style={ styles.container }>
      <Image style={{width: 175, height: 175}} source={{uri: 'https://lh3.googleusercontent.com/wphgR4ihMK8SHXnxHbh0wOhN79Xmy0MBtGh8hzshG_ivAevYAbDTxnEhyvfI877isuZom7d6RKMW--zdopHPIG7QahtUir18dB0VOZzA_EQRfbgzXtqefv5BilFk9Ll5N_z25YMf'}} />
    </View>
    <View style={[styles.button, styles.b1]}>
      <Text onPress={() => navigation.navigate('Login')} style={ styles.t1 }>Sign In</Text>
    </View>
    <View style={[styles.button, styles.b2]}>
      <Text style={ styles.t1 }>Smart Camera</Text>
    </View>
  </View>
);

const LoginActivity = ({ navigation }) => (
  <View style={ styles.container }>
    <View style={ styles.container }>
      <View style={ styles.c1 }>
        <Text style={{color: '#163D22', marginBottom: 20, fontWeight: 'bold', fontSize: 50}}>Sign In</Text>
        <TextInput
          style={{height: 40, marginBottom: 10}}
          placeholder="Username"
          defaultValue="jamesarthur141"
        />
        <TextInput
          style={{height: 40, marginBottom: 50}}
          placeholder="Password"
          defaultValue="jamesarthur141"
          secureTextEntry={true}
        />
        <Button
          onPress={() => navigation.navigate('Main') }
          title="Sign In As Individual"
          color="#00B624"
          accessibilityLabel="This button signs you in to your account."
        />
        <View style={{marginTop: 20}}></View>
        <Button
          style={{marginTopTop: 50}}
          onPress={() => navigation.navigate('Main') }
          title="Sign In As Organization"
          color="#00B624"
          accessibilityLabel="This button signs you in to your account."
        />
        </View>
    </View>
  </View>
);

const MainActivity = ({ navigation }) => (
  <View style={ styles.container }>
    <View style={ styles.container }>
      <View style={ styles.c1 }>
        <Text style={{color: '#163D22', marginTop: 20, marginBottom: 20, fontWeight: 'bold', fontSize: 50}}>Activity</Text>
        <Text style={{marginBottom: 20, fontWeight: 'bold'}}>Your Account Settings</Text>
        <FlatList
          data={[
            {key: '+spintwireless requested $79.99 from you. "Here is your bill for Januray 2018."'}, 
            {key: '@AndrewJohnson3456 payed you $20. "Thanks for pizza."'},
            {key: '@WillPeracchio\'s birthday is coming up! Here\'s a small gift you can schedule for his birthday 2/23/2018.'},
            {key: '+boysandgirlsphilly is asking for $50 to support underprivledged kids and gives them the mentors and resources they need.'},
            {key: '@AndrewJohnson3456 payed you $20. "One of these days I\'ll remember my wallet."'},
            {key: '@WillPeracchio is requesting $100. "Nick Foles > Tom Brady"'},
            {key: '+TDBank is requesting $200. We saw you recieved your paycheck for the month of Januray. We recommend saving 7% fpr retirement.'},
            {key: '+PayChex payed you $2000. "Your paycheck for 2018 was just deposited."'}
          ]}
          renderItem={({item}) => <Text style={{marginBottom: 20, fontSize: 25}}>{item.key}</Text>}
        />
      </View>
    </View>
    <View style={[styles.button, styles.b2]}>
      <TouchableHighlight onPress={() => navigation.navigate('Send')}>
        <Image style={[styles.menuImage]} source={{uri: 'http://soterra.org/files/ic_send_white_24dp_2x.png'}} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Request')}>
        <Image style={[styles.menuImage, styles.centerImage]} source={{uri: 'http://soterra.org/files/ic_receipt_white_24dp_2x.png'}} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Loan')}>
        <Image style={ styles.menuImage } source={{uri: 'http://soterra.org/files/ic_compare_arrows_white_24dp_2x.png'}} />
      </TouchableHighlight>
    </View>
  </View>
);

const SendActivity = ({ navigation }) => (
  <View style={ styles.container }>
    <View style={ styles.container2 }>
      <View style={ styles.c2 }>
       <Text style={{color: '#00B624', marginBottom: 20, marginTop: 25, fontWeight: 'bold', fontSize: 50}} >Send A Payment</Text>
        <Text style={{fontSize: 20, marginBottom: 20}} onPress={() => navigation.navigate('Main')}>Back</Text>
        <ScrollView style={{paddingBottom: 60}}>
        <TextInput
          style={{height: 40, marginBottom: 10}}
          placeholder="Recipient"
          /* onChangeText={(text) => this.setState({text})} */
        />
        <TextInput
          style={{height: 40, marginBottom: 10}}
          placeholder="Date"
          /* onChangeText={(text) => this.setState({text})} */
        />
        <TextInput
          style={{height: 40, marginBottom: 10}}
          placeholder="Amount"
          /* onChangeText={(text) => this.setState({text})} */
        />
        <TextInput
          style={{height: 40, marginBottom: 10}}
          placeholder="Message"
          /* onChangeText={(text) => this.setState({text})} */
        />
        </ScrollView>
        </View>
    </View>
    <View style={[styles.button, styles.b1]}>
      <Text onPress={() => navigation.navigate('Main')} style={ styles.t1 }>Send</Text>
    </View>
  </View>
);

const RequestActivity = ({ navigation }) => (
  <View style={ styles.container }>
    <View style={ styles.container2 }>
      <View style={ styles.c2 }>
        <Text style={{color: '#00B624', marginBottom: 20, marginTop: 25, fontWeight: 'bold', fontSize: 50}} >Request A Payment</Text>
        <Text style={{fontSize: 20, marginBottom: 20}} onPress={() => navigation.navigate('Main')}>Back</Text>
        <ScrollView style={{paddingBottom: 60}}>
          <TextInput
            style={{height: 40, marginBottom: 10}}
            placeholder="Recipient"
            /* onChangeText={(text) => this.setState({text})} */
          />
          <TextInput
            style={{height: 40, marginBottom: 10}}
            placeholder="Date"
            /* onChangeText={(text) => this.setState({text})} */
          />
          <TextInput
            style={{height: 40, marginBottom: 10}}
            placeholder="Amount"
            /* onChangeText={(text) => this.setState({text})} */
          />
          <TextInput
            style={{height: 40, marginBottom: 10}}
            placeholder="Message"
            /* onChangeText={(text) => this.setState({text})} */
          />
        </ScrollView>
        </View>
    </View>
    <View style={[styles.button, styles.b1]}>
      <Text onPress={() => navigation.navigate('Main')} style={ styles.t1 }>Request</Text>
    </View>
  </View>
);

const LoanActivity = ({ navigation }) => (
  <View style={ styles.container }>
    <View style={ styles.container2 }>
      <View style={ styles.c2 }>
        <Text style={{color: '#00B624', marginBottom: 20, marginTop: 25, fontWeight: 'bold', fontSize: 50}} >Loan Agreement</Text>
        <Text style={{fontSize: 20, marginBottom: 20}} onPress={() => navigation.navigate('Main')}>Back</Text>
        <ScrollView style={{paddingBottom: 60}}>
          <TextInput
            style={{height: 40, marginBottom: 10}}
            placeholder="Recipient"
            /* onChangeText={(text) => this.setState({text})} */
          />
          <TextInput
            style={{height: 40, marginBottom: 10}}
            placeholder="Date"
            /* onChangeText={(text) => this.setState({text})} */
          />
          <TextInput
            style={{height: 40, marginBottom: 10}}
            placeholder="Amount"
            /* onChangeText={(text) => this.setState({text})} */
          />
          <TextInput
            style={{height: 40, marginBottom: 10}}
            placeholder="Interest Rate"
            /* onChangeText={(text) => this.setState({text})} */
          />
          <TextInput
            style={{height: 40, marginBottom: 10}}
            placeholder="Message"
            /* onChangeText={(text) => this.setState({text})} */
          />
        </ScrollView>
        </View>
    </View>
    <View style={[styles.button, styles.b1]}>
      <Text onPress={() => navigation.navigate('Main')} style={ styles.t1 }>Loan</Text>
    </View>
  </View>
);

const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  
  Login: {
    screen: LoginActivity,
  },
  
  Main: {
    screen: MainActivity,
  },
  
  Send: {
    screen: SendActivity,
  },
  
  Request: {
    screen: RequestActivity,
  },
  
  Loan: {
    screen: LoanActivity,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  container2: {
    flex: 1,
    flexDirection: 'column',
  },

  c1: {
    margin: 30,
  },
  
  c2: {
    margin: 10,
  },

  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },

  b1: {
    backgroundColor: '#00B624',
    height: 100,
    flexDirection: 'row',
  },

  b2: {
    backgroundColor: '#163D22',
    height: 100,
    flexDirection: 'row',
  },

  t1: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },

 
  menuImage: {
    width: 36,
    height: 36,
  },

  centerImage: {
    marginLeft: 60,
    marginRight: 60
  },
  
});

export default RootDrawer;