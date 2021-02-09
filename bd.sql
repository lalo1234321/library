-- para crear la base de datos

create table usuario (
    idUsuario number(3),
    alias varchar2(20) UNIQUE NOT NULL,
    email varchar2(30) UNIQUE NOT NULL,
    password varchar(500) NOT NULL,
    constraint usuario_idusuario_pk primary key (idUsuario)
);

create table administrador (
    idAdministrador number(3),
    nombre varchar2(20) NOT NULL,
    apellidos varchar2(20) NOT NULL,
    email varchar2(30) UNIQUE NOT NULL,
    password varchar2(500)NOT NULL,
    constraint admin_idAdmin_pk primary key (idAdministrador)
);

create table genero (
    idGenero number(3),
    nombre varchar2(15) UNIQUE NOT NULL,
    constraint gen_idgen_pk primary key (idGenero)
);

create table libro (
    idLibro number(3),
    titulo varchar2(100) NOT NULL,
    autor varchar2(50) NOT NULL,
    editorial varchar2(30),
    fechaPublicacion date,
    paginas number(5) NOT NULL,
    sinopsis varchar2(1000),
    idGenero number(3) NOT NULL,
    idAdministrador number(3) NOT NULL,
    constraint libro_idLibro_pk primary key (idLibro),
    constraint libro_idGenero_fk foreign key (idGenero)
    references genero(idGenero),
    constraint libro_idAdministrador_fk foreign key (idAdministrador)
    references administrador(idAdministrador)
);

create table preferencia (
    idUsuario number(3) NOT NULL,
    idGenero number(3) NOT NULL,
    constraint usuario_fk_preferencia foreign  key  (idUsuario)
    references usuario (idUsuario),
    constraint genero_fk_preferencia foreign key (idGenero)
    references genero (idGenero)
);

create table favorito (
    idUsuario number(3) NOT NULL,
    idLibro number(3) NOT NULL,
    constraint usuario_fk_favorito foreign key (idUsuario)
    references usuario (idUsuario),
    constraint libro_fk_favorito foreign key (idLibro)
    references libro (idLibro)
);


create table pendiente (
    estado char(1) DEFAULT 'N',
    idUsuario number(3) NOT NULL,
    idLibro number(3) NOT NULL,
    constraint pendiente_idUsuario_fk foreign key (idUsuario)
    references usuario(idUsuario),
    constraint pendiente_idLibro_fk foreign key (idLibro)
    references libro (idLibro)
);

