import React from "react";
import styles from'../Google_map.module.css'

const Google_map=()=>{
    return(
        <>
            <div className={styles.blank}>
                <h2><i className="fa-solid fa-map-location-dot"></i>  Find us on <span>Maps!</span></h2>
                <p>(Hover over the spot)</p>
            </div>

            <main>
                <section className="google-map" >   
                    <div className="map-frame">
                        <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7458389923017!2d72.87241691469963!3d19.206300287013324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1681285921275!5m2!1sen!2sin"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"  aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Google_map