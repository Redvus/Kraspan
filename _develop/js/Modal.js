class Modal {

    constructor(materialLink, materialSrc) {
        this.materialLink = materialLink;
        this.materialSrc = materialSrc;
        this.modalLoad();
        this.modalLoadAnim();
    }

    modalLoad() {
        this.modalWrapper = document.createElement('div');
        this.modalWrapperContainer = document.createElement('div');
        this.bodyWrapper = document.querySelector('body');
        this.modalMask = document.createElement('div');
        this.modalClose = document.createElement('div');
        this.iframeEl = document.createElement('iframe');
        this.wrapperDesktop = document.querySelector('.wrapper');
        this.scrollPosition = document.documentElement.scrollTop;

        this.modalWrapper.className += 'wrapper-modal';
        this.modalWrapperContainer.className += 'wrapper-modal__container';
        this.modalClose.className += 'wrapper-modal__close';
        this.modalMask.className += 'wrapper-modal__mask';

        this.modalClose.innerHTML = `
            <i class="fas fa-close"></i>
        `;
    }

    bodyFixed() {
        window.addEventListener('scroll', function () {
            wrapperDesktop.style.top = scrollPosition;
            this.bodyWrapper.style.position = 'fixed';
            this.bodyWrapper.style.width = '100vw';
            console.log(scrollPosition);
        });

    }

    bodyUnFixed() {
        const scrollYTop = document.body.style.top;
        // document.body.style.position = '';
        // document.body.style.top = '';
        document.body.style.width = '';
    }

    modalLoadAnim() {
        this.materialLinkID = document.getElementById(this.materialLink);

        let tl = new gsap.timeline({
            reversed: true,
            onStart: () => {
                this.bodyWrapper.appendChild(this.modalWrapper);
                this.modalWrapper.appendChild(this.modalWrapperContainer);
                this.modalWrapper.appendChild(this.modalClose);
                this.modalWrapperContainer.appendChild(this.iframeEl);
                // modalWrapperContainer.id = materialContent;
                this.iframeEl.src = `${this.materialSrc}`;
                this.iframeEl.onload = () => {
                    this.iframeEl.contentDocument;
                };
            }
        });
        tl
            .from(this.modalMask, {
                duration: 0.4,
                // delay: "-0.3",
                autoAlpha: 0
            })
            .from(this.modalWrapper, {
                duration: 0.3,
                delay: "-0.3",
                autoAlpha: 0,
                x: "100%",
                ease: "power1.inOut"
            })
            .from(this.iframeEl, {
                duration: 0.3,
                delay: "0.2",
                autoAlpha: 0
            })
            .from(this.modalClose, {
                duration: 0.3,
                autoAlpha: 0
            })
        ;

       this.materialLinkID.addEventListener("click", () => {
            tl.play();
            this.bodyWrapper.appendChild(this.modalMask);
        });

        /*jshint -W030 */
        this.modalClose.addEventListener("click", () => {
            tl.reversed() ? tl.restart() : tl.reverse();
            setTimeout(() => {
                this.bodyWrapper.removeChild(this.modalMask);
                this.modalWrapper.removeChild(this.modalWrapperContainer);
                this.modalWrapper.removeChild(this.modalClose);
                this.bodyWrapper.removeChild(this.modalWrapper);
                this.modalWrapperContainer.removeChild(this.iframeEl);
            }, 1100);
        });
        this.modalMask.addEventListener("click", () => {
            tl.reversed() ? tl.restart() : tl.reverse();
            setTimeout(() => {
                this.bodyWrapper.removeChild(this.modalMask);
                this.modalWrapper.removeChild(this.modalWrapperContainer);
                this.modalWrapper.removeChild(this.modalClose);
                this.bodyWrapper.removeChild(this.modalWrapper);
                this.modalWrapperContainer.removeChild(this.iframeEl);
            }, 1100);
        });
    }
}