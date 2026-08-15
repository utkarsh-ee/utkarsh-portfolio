const menu=document.querySelector('.menu'), mobile=document.querySelector('.mobile-nav');
menu?.addEventListener('click',()=>mobile.classList.toggle('open'));
mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));

const projects={
 tm4c:{title:'TM4C123 ESC Controller Simulator',type:'Embedded systems',body:'A pre-ESC development platform built around the Tiva C / TM4C123 LaunchPad. The known system concept uses PUSH1 for arm/disarm, a potentiometer for speed input, RGB LED status and serial diagnostics.',items:[['Controller','TM4C123 / Tiva C'],['Firmware','Embedded C'],['Toolchain','PlatformIO'],['Inputs','PUSH1 + potentiometer'],['Outputs','RGB status + serial diagnostics'],['Next stage','[ADD ACTUAL ESC DETAILS]']]},
 oled:{title:'Raspberry Pi + OLED Interface',type:'Embedded interface',body:'A small embedded-display system using an I²C OLED. The known implementation included bus discovery at address 0x3C and a Python-based Raspberry Pi display stack.',items:[['Platform','Raspberry Pi'],['Interface','I²C'],['Display','0.96-inch OLED'],['Address','0x3C'],['Software','Python / display libraries'],['Media','[ADD HARDWARE PHOTO]']]},
 filter:{title:'RC Filter Laboratory',type:'Electronics lab',body:'Hands-on low-pass and high-pass filter experiments using an ADALM1000 and Pixelpulse2. Component values, measured response plots and observations can be added to the asset folders later.',items:[['Instrument','ADALM1000'],['Software','Pixelpulse2'],['Known component','10 kΩ resistor / 12 nF capacitor'],['Experiments','Low-pass + high-pass'],['Results','[ADD MEASUREMENTS]'],['Media','[ADD CAPTURES]']]},
 robot:{title:'RopeWalker',type:'Robotics',body:'A rope-climbing robot concept involving traction, wheel/pulley geometry, motor selection and power-system constraints. The portfolio intentionally leaves competition/performance claims as placeholders until verified.',items:[['Architecture','Rope-climbing / pinch traction'],['Motor','A2212 2200KV BLDC [prototype context]'],['Battery','3S LiPo [prototype context]'],['Mechanics','V-groove / wheel geometry'],['Budget','[VERIFY]'],['Result','[ADD TEST RESULTS]']]}
};
const modal=document.querySelector('#project-modal'), content=document.querySelector('#modal-content');
document.querySelectorAll('.details').forEach(btn=>btn.addEventListener('click',()=>{
 const p=projects[btn.dataset.project];
 content.innerHTML=`<p class="eyebrow">${p.type}</p><h2>${p.title}</h2><p>${p.body}</p><div class="modal-grid">${p.items.map(x=>`<div><small>${x[0]}</small><strong>${x[1]}</strong></div>`).join('')}</div>`;
 modal.showModal();
}));
document.querySelector('.modal-close')?.addEventListener('click',()=>modal.close());
modal?.addEventListener('click',e=>{if(e.target===modal)modal.close()});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>{el.style.opacity=0;el.style.transform='translateY(16px)';el.style.transition='opacity .7s ease,transform .7s ease';observer.observe(el)});
