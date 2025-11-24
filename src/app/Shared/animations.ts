import { trigger, transition, style, query, animate, stagger, group } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(
      ':leave',
       // Animate out gracefully
      [style({ opacity: 1 }), animate('0.2s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      // Animate in gracefully
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    ),
  ]),
]);

// Animation for lists of items appearing staggered
export const listAnimation = trigger('listAnimation', [
    transition('* <=> *', [
      query(':enter',
        [
          style({ opacity: 0, transform: 'translateY(15px)' }),
          stagger('60ms',
            animate('300ms ease-out',
              style({ opacity: 1, transform: 'translateY(0px)' })
            )
          )
        ],
        { optional: true }
      )
    ])
  ]);

 export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    // Apply initial styles to both entering and leaving views
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%' // Ensure they cover the full area for smooth transition
      })
    ], { optional: true }),
    
    // Group animations to happen concurrently if needed, or sequence them
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateX(0%)' }))
      ], { optional: true })
    ])
  ]),
]);

// Animation for showing a single item or card with a subtle entrance
export const cardAnimation = trigger('cardAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' })),
  ]),
]);