import React from 'react'
import CommentForm from './CommentForm'
import bg from '../../public/katelyn-macmillan-X1504kwZTnI-unsplash.jpg'



const App = () => (
    <section id="SectionInvitation" style={{
        backgroundImage: `url("${bg.src}")`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: 0,
    }}>
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', padding: '90px 45px' }}>
            <CommentForm />
        </div>
    </section>
)

export default App