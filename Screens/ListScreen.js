import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import db from '../config';
var present;
var absent;
var today;

export default class ListScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      all_students: [],
      presentPressedList: [],
      absentPressedList: [],
      tanveer: true,
      japman: true,
      davinder: true,
      amanpreet: true,
    };
  }

  componentDidMount = async () => {
    var bRef = db.ref("class/");
    bRef.on("value", data =>{
      var details = data.val();
      this.setState({
        tanveer: details.enabled.enabled1,
        japman: details.enabled.enabled2,
        davinder: details.enabled.enabled3,
        amanpreet: details.enabled.enabled4,
      });
    });

    var class_ref = await db.ref('/').on('value', (data) => {
      // class_ref.on('value', (data) => {
      var all_students = [];
      var class_a = data.val().class_A;
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({ all_students: all_students });
    });

    today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    today = date + '-' + month + '-' + year;
    return today;   
  };

  reset=()=>{
    db.ref("class/enabled/").set({
      enabled1: false,
      enabled2: false,
      enabled3: false,
      enabled4: false,           
    })
  }

  goToSummary = () => {
    this.props.navigation.navigate('SortedScreen');
  };
  render() {
    return (
 
        <View>
          <Header/>
          <View style={styles.grid}>
            <Text style={styles.name}>1     Tanveer          </Text>
            <TouchableOpacity
            disabled={this.state.sadana}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/01/').update({
                  [today]: 'Present',
                  name: 'Tanveer',
                  roll_no: 1,
                });
                db.ref("class/enabled/").update({
                  enabled1: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.sadana}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/01/').update({
                  [today]: 'Absent',
                  name: 'Tanveer',
                  roll_no: 1,
                }),
                  db.ref("class/enabled/").update({
                  enabled1: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>2     Japman       </Text>
            <TouchableOpacity
            disabled={this.state.buven}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/02/').update({
                  [today]: 'Present',
                  name: 'Japman',
                  roll_no: 2,
                });
                db.ref("class/enabled/").update({
                  enabled2: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.buven}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/02/').update({
                  [today]: 'Absent',
                  name: 'Japman',
                  roll_no: 2,
                });
                db.ref("class/enabled/").update({
                  enabled2: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>3       Davinder   </Text>
            <TouchableOpacity
            disabled={this.state.renuka}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/03/').update({
                  [today]: 'Present',
                  name: 'Davinder',
                  roll_no: 3,
                });
                db.ref("class/enabled/").update({
                  enabled3: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.renuka}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/03/').update({
                  [today]: 'Absent',
                  name: 'Davinder',
                  roll_no: 3,
               });
               db.ref("class/enabled/").update({
                  enabled3: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>4      Amanpreet  </Text>
            <TouchableOpacity
            disabled={this.state.karthick}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/04/').update({
                  [today]: 'Present',
                  name: 'Amanpreet',
                  roll_no: 4,
                });
                db.ref("class/enabled/").update({
                  enabled4: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.karthick}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/04/').update({
                  [today]: 'Absent',
                  name: 'SAmanpreet',
                  roll_no: 4,
                });
                db.ref("class/enabled/").update({
                  enabled4: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid1}>
          <TouchableOpacity style={styles.buttons1} onPress={this.goToSummary}>
            <Text style={styles.text1}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: 'white',
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "black",
    width: 70,
    marginTop: 15,
    marginRight: 5,
    left: 7,
  },
  Abuttons: {
    backgroundColor: 'white',
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "black",
    width: 70,
    marginTop: 15,
    marginRight: 5,
    left: 7,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: "black",
  },
  Atext: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: "black",
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    padding: 5,
  },
  grid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons1: {
    alignSelf: 'center',
    backgroundColor: 'black',
    borderWidth: 3,
    width: 100,
    left: 20,
    marginTop: 20,
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
