<template>
  <v-container>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>SaludVida Medical Center</v-toolbar-title>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ attrs, on }">
          <v-btn text v-bind="attrs" v-on="on">quienes somos</v-btn>
        </template>
        <v-list dark class="primary">
          <v-list-item>mision</v-list-item>
          <v-list-item>vision</v-list-item>
          <v-list-item>objetivos</v-list-item>
        </v-list>
      </v-menu>

      <v-btn text @click="singIn = true"><v-icon>mdi mdi-account</v-icon></v-btn>
    </v-app-bar>
    <v-row justify="centar">
      <v-col class="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at itaque totam minus quidem fuga aliquid impedit
        fugit doloremque distinctio animi veniam cumque, natus ea perferendis debitis a ex sint temporibus? Debitis, ut?
        Impedit, delectus omnis, nam velit asperiores eaque, amet autem incidunt atque vel recusandae ducimus laboriosam
        fuga provident aliquam labore hic officia. Harum ratione aut quis repellendus culpa nam repudiandae a provident
        numquam temporibus, quia consequatur! Ut fugiat fuga voluptates aut nisi maxime ex, asperiores velit quidem sequi
        et laboriosam. Voluptatum suscipit fugiat dolore repellendus atque asperiores earum, dolorem quis tenetur repellat
        libero reiciendis quos nemo, ullam cum, id dignissimos omnis voluptates aliquam recusandae! Consectetur officia,
        assumenda sint temporibus ipsum iusto dolores doloribus rerum corporis, eum blanditiis at exercitationem ad. Autem
        numquam itaque reprehenderit quidem quia iusto animi, distinctio nisi exercitationem blanditiis sunt ad molestias
        voluptates adipisci veritatis dolorem quos facere vitae explicabo mollitia minima deleniti! Dolor aperiam, magni
        error eveniet natus corrupti adipisci corporis iste ex provident earum hic debitis amet autem architecto accusamus
        exercitationem, ea dicta! Perspiciatis esse reiciendis natus magnam dolorum amet non perferendis aliquam autem
        eius dolore, facilis mollitia possimus ipsum fugit beatae provident, debitis explicabo recusandae. Aut tenetur,
        velit officiis nisi voluptatibus ab consectetur tempore esse, at eius ducimus quisquam animi magnam voluptates
        molestias. Deserunt reiciendis iusto tempore odit obcaecati quos assumenda similique repellendus odio, dignissimos
        ullam necessitatibus alias unde, ipsa dicta laboriosam maiores delectus blanditiis incidunt. Ab dolor, est aliquid
        laboriosam velit dolore possimus illo sapiente sit doloribus dolorum mollitia quod incidunt saepe debitis nisi
        laborum rem eveniet beatae iure, necessitatibus odio! Laborum dolorum quis, dolor atque excepturi aut repellat quo
        autem provident neque inventore illum? Ad totam sed delectus ullam, quasi necessitatibus exercitationem natus
        reiciendis? Illo totam reprehenderit ipsum. Et, voluptatem? Minus quae laborum perspiciatis tempore voluptate,
        asperiores odio incidunt cumque commodi officiis. Consequuntur deserunt commodi quo enim illum. Non ducimus natus,
        libero totam consequuntur veritatis velit quas nam, iure harum, quam ad illum suscipit optio id praesentium nobis
        aperiam. Saepe minus suscipit aspernatur libero, praesentium dolores dolorem voluptatem sit harum nesciunt alias
        eum quaerat iure beatae atque! Alias a eligendi deleniti, sapiente voluptatum impedit recusandae eaque repellat
        laborum quaerat enim ipsa amet quod placeat dolores vel animi. Assumenda porro eum est eaque voluptates error
        temporibus cum, vel doloremque repellat illum quia fugiat consequuntur, nemo, nulla at itaque accusantium tempora
        fugit quos blanditiis sed ducimus esse unde. Iste ipsa, dolore maxime consequuntur eos sequi iusto vero
        blanditiis, voluptatibus repudiandae esse quae quam, iure tenetur! Voluptate voluptatem sint quasi aut dolores
        voluptatum officiis inventore? Iste, aliquid fugiat sint deserunt, dolorem quasi unde sapiente commodi accusamus
        maxime animi facilis totam asperiores ipsum ratione enim eum repellendus. Temporibus numquam ratione adipisci
        nesciunt ex, exercitationem at laudantium, tenetur cupiditate magni quam! Esse qui, vitae ad corporis laboriosam
        non perspiciatis omnis mollitia, amet maiores enim facilis error, velit doloribus? Incidunt esse sapiente tempore
        ad eum voluptatibus voluptatem alias consequuntur numquam aspernatur maiores natus architecto, rem libero officiis
        deleniti reiciendis. Exercitationem error delectus aliquid magnam itaque aspernatur!
      </v-col>
    </v-row>
    <v-dialog v-model="singIn" :max-width="suFrom ? '700px' : '450px'" class="ma-3" persistent>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="toggleForm()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title class="text-uppercase">
          {{ suFrom ? 'Sing Up' : 'Sing In' }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn v-if="suFrom" class="success mb-3" large right bottom dark @click="suFrom = false">
            sing in
          </v-btn>
          <v-btn v-else class="success mb-3" large right bottom dark @click="suFrom = true">
            sing up
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card v-if="suFrom">
        <v-card-tex>
          <v-form class="ma-3" @submit.prevent="asignup()" ref="signupFrom">
            <v-row>
              <v-col md="6" sm="12">
                <v-text-field label="Nombre" type="text" :rules="nameRules" v-model="user.nombre"></v-text-field>
              </v-col>
              <v-col md="6" sm="12">
                <v-text-field label="Apellidos" type="text" :rules="lastNameRules"
                  v-model="user.apellidos"></v-text-field>
              </v-col>
              <v-col md="6" sm="12">
                <v-select label="Tipo de documento" :items="itemsDoc" :rules="tDocRules" v-model="user.tipo">
                </v-select>
              </v-col>
              <v-col md="6" sm="12">
                <v-text-field label="Numero de documento" type="text" :rules="nDocRules"
                  v-model="user.doc"></v-text-field>
              </v-col>
              <v-col md="6" sm="12">
                <v-text-field label="Fecha de nacimiento" type="date" :rules="fechaNacimientoRules"
                  v-model="user.fecha_nacimiento"></v-text-field>
              </v-col>
              <v-col md="6" sm="12">
                <v-select label="Genero" type="number" :items="itemGen" :rules="generoRules"
                  v-model="user.genero"></v-select>
              </v-col>
              <v-col md="6" sm="12">
                <v-text-field label="Numero de celular" type="text" :rules="celRules"
                  v-model="user.celular"></v-text-field>
              </v-col>
              <v-col md="6" sm="12">
                <v-text-field label="Correo eletronico" type="text" :rules="emailRules"
                  v-model="user.email"></v-text-field>
              </v-col>
              <v-col md="6" sm="12">
                <v-text-field label="Contraseña" type="password" :rules="passwordRules"
                  v-model="user.password"></v-text-field>
              </v-col>
              <v-col md="6" sm="12">
                <v-text-field label="confirmar contraseña" type="password" :rules="repeatPasswordRoles"></v-text-field>
              </v-col>
              <v-col md="12" sm="12">
                <v-text-field label="Dirección" type="text" :rules="addressRules" v-model="user.direccion"></v-text-field>
                <v-btn block class="primary mb-3 mt-6" large right bottom dark type="submit">Sing Up</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-tex>
      </v-card>
      <v-card v-else>
        <v-card-tex>
          <v-form class="ma-3" @submit.prevent="asignin()" ref="signinFrom">
            <v-row>
              <v-col md="12" sm="12">
                <v-select label="Tipo de documento" :items="itemsDoc" :rules="tDocRules" v-model="user.tipo">
                </v-select>
                <v-text-field label="Numero de documento" type="text" :rules="nDocRules"
                  v-model="user.doc"></v-text-field>
                <v-text-field label="Contraseña" type="password" :rules="passwordRules"
                  v-model="user.password"></v-text-field>
              </v-col>
              <v-col md="12" sm="12">
                <v-btn block class="primary mb-3 mt-6" large right bottom dark type="submit">Sing in</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-tex>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      itemsDoc: ['CEDULA DE CIUDADANIA', 'CEDULA DE EXTRANJERIA', 'NUMERO DE IDENTIDAD', 'PASAPORTE', 'REGISTRO CIVIL', 'TARJETA DE IDENTIDA'],
      itemGen: ['Hombre', 'Mujer', 'Otro'],
      singIn: false,
      suFrom: false,
      nameRules: [
        value => !!value || 'EL campo es requerido',
        value => (value && value.length >= 2 || 'El nombre debe tener mínimo 2 lectras')
      ],
      lastNameRules: [
        value => !!value || 'EL campo es requerido',
        value => (value && value.length >= 8 || 'Los apellidos deben tener mínimo 8 lectras')
      ],
      tDocRules: [
        value => !!value || 'EL campo es requerido'
      ],
      nDocRules: [
        value => !!value || 'El campo es requerido',
        value => {
          if (this.user.tipo === 'CEDULA DE CIUDADANIA') {
            return /^\d{10}$/.test(value) || 'El número de cédula debe tener exactamente 10 dígitos';
          } else if (this.user.tipo === 'CEDULA DE EXTRANJERIA') {
            return /^\d{12}$/.test(value) || 'El número de cédula de extranjería debe tener exactamente 12 dígitos';
          } else if (this.user.tipo === 'NUMERO DE IDENTIDAD') {
            return /^\d{10}$/.test(value) || 'El número de identidad debe tener exactamente 10 dígitos';
          } else if (this.user.tipo === 'PASAPORTE') {
            return /^[A-Z]{3}\d{6}$/.test(value) || 'El pasaporte debe tener el formato correcto (3 letras mayúsculas seguidas de 6 dígitos)';
          } else if (this.user.tipo === 'REGISTRO CIVIL') {
            return /^\d{10}$/.test(value) || 'El registro civil debe tener exactamente 10 dígitos';
          } else if (this.user.tipo === 'TARJETA DE IDENTIDA') {
            return /^\d{10}$/.test(value) || 'La tarjeta de identidad debe tener exactamente 10 dígitos';
          } else {
            return true;
          }
        }
      ],
      fechaNacimientoRules: [
        value => !!value || 'EL campo es requerido'
      ],
      generoRules: [
        value => !!value || 'EL campo es requerido'
      ],
      celRules: [
        value => !!value || 'El campo es requerido',
        value => typeof value === 'string' && value.charAt(0) === '3' || 'El primer número debe ser 3',
        value => /^\d+$/.test(value) || 'El valor debe contener solo números',
        value => (typeof value === 'string' && value.length === 10) || 'El numero de celular debe tener 10 digitos'
      ],
      emailRules: [
        value => !!value || 'El campo es requerido',
        value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'El correo electrónico no es válido'
      ],
      passwordRules: [
        value => !!value || 'El campo es requerido',
        value => value && value.length >= 8 || 'La contraseña debe tener al menos 8 caracteres',
        value => value && /[A-Z]/.test(value) || 'La contraseña debe contener al menos una letra mayúscula',
        value => value && /[a-z]/.test(value) || 'La contraseña debe contener al menos una letra minúscula',
        value => value && /\d/.test(value) || 'La contraseña debe contener al menos un número',
        value => value && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value) || 'La contraseña debe contener al menos un carácter especial'
      ],
      repeatPasswordRoles: [
        value => !!value || 'El campo es requerido',
        value => value === this.user.password || 'Las contraseñas no coinciden'
      ],
      addressRules: [
        value => !!value || 'El campo de dirección es requerido',
        value => value && value.length >= 5 || 'La dirección debe tener al menos 5 caracteres',
        value => value && /^[a-zA-Z0-9\s\.\,\-]+$/i.test(value) || 'La dirección solo puede contener letras, números, espacios y los caracteres . , -'
      ],
      user: { nombre: '', apellidos: '', tipo: '', doc: '', fecha_nacimiento: '', genero: '', celular: '', email: '', password: '', direccion: '' },
    }
  },
  methods: {
    async asignup() {
      let valid = this.$refs.signupFrom.validate();
      if (valid) {
        try {
          const res = await this.axios.post('/signup/paciente', this.user);
          this.$refs.signupFrom.reset();
          this.suFrom = false;
          Swal.fire({
            title: "Notificación",
            text: res.data.message,
            icon: "success"
          });
        } catch (error) {
          Swal.fire({
            title: "Notificación",
            text: error.response.data.message,
            icon: "error"
          });
        }
      }
    },
    async asignin() {
      let valid = this.$refs.signinFrom.validate();
      if (valid) {
        try {
          const res = await this.axios.post('/signin', this.user);
          if (res.data.NotFound) {
            Swal.fire({
              title: "Notificación",
              text: res.data.message,
              icon: "error"
            });
          } else {
            sessionStorage.setItem('session', JSON.stringify(res.data));
            this.$router.push('/profile');
          }
        } catch (error) {
          Swal.fire({
            title: "Notificación",
            text: error.response.data.message,
            icon: "error"
          });
        }
      }
    },
    toggleForm() {
      this.singIn = false;
      this.suFrom = false;
      this.$refs.signupFrom.reset();
      this.$refs.signinFrom.reset();
    }
  },
}
</script>
