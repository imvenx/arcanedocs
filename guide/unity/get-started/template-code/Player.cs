using System;
using System.Security.Cryptography;
using ArcanepadSDK;
using ArcanepadSDK.Models;
using UnityEngine;

public class Player : MonoBehaviour
{
    public ArcanePad Pad { get; private set; }

    public void Initialize(ArcanePad pad)
    {
        Pad = pad;

        Pad.On("Attack", new Action<ArcaneBaseEvent>(Attack));
        Pad.On("SomeEvent", (ArcaneBaseEvent e) => { });

        Pad.On(AEventName.Down, (ArcaneBaseEvent e) =>
        {
            transform.Translate(Vector3.down);
        });

        Debug.Log(Pad.User.name);
        Debug.Log(Pad.User.color);
    }

    void Attack(ArcaneBaseEvent e)
    {
        Debug.Log("Attack!");
        Pad.Vibrate(1000);
        Pad.Emit(new TakeDamageEvent(3));
    }
}
