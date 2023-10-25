import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Alert } from "react-native";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      btnIniciar: 'INICIAR',
      ultimoTempo: null
    }

    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ btnIniciar: 'INICIAR' })
    }
    else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100);
      this.setState({ btnIniciar: 'PARAR' })
    }

  }

  limpar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimoTempo: this.state.numero,
      numero: 0,
      btnIniciar: 'INICIAR'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')}
          style={styles.cronometro}></Image>
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
            <Text style={styles.btnTexto}>{this.state.btnIniciar}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.AreaUltima}>
          <Text style={styles.textoTempo}>
            {this.state.ultimoTempo > 0 ? 'Ultimo tempo: ' + this.state.ultimoTempo.toFixed(2) : ''}
          </Text>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 90,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  AreaUltima: {
    marginTop: 40,
  },
  textoTempo: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  }
})


export default App;