import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { FiPlus, FiSearch} from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';




export function Home(){
  return(
    <Container>
      
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>
      <Header />
      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="Frontend"/></li>
        <li><ButtonText title="Node"/></li>
        <li><ButtonText title="React"/></li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>
      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
             tags:[
              { id: '1', name:'react'},
              { id: '2', name:'rocket'}
            ]
             }}
             />
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus/>
        Criar Nota
      </NewNote>
    </Container>
  )
}